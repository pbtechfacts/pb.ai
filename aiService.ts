import { getSupabaseClient } from '@/template';

export interface AIResponse {
  data: string | null;
  error: string | null;
}

export const aiService = {
  async chat(prompt: string, systemPrompt?: string): Promise<AIResponse> {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: { 
          prompt,
          systemPrompt: systemPrompt || 'You are a helpful AI assistant.',
        },
      });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data: data?.response || null, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'Unknown error' };
    }
  },

  async analyzeImage(imageUri: string, prompt: string): Promise<AIResponse> {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.functions.invoke('ai-vision', {
        body: { 
          imageUri,
          prompt,
        },
      });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data: data?.analysis || null, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'Unknown error' };
    }
  },

  async transcribeAudio(audioUri: string): Promise<AIResponse> {
    try {
      const supabase = getSupabaseClient();
      const { data, error } = await supabase.functions.invoke('ai-transcribe', {
        body: { audioUri },
      });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data: data?.transcription || null, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'Unknown error' };
    }
  },
};
