import { IconProps } from '@expo/vector-icons/build/createIconSet';

export type AIToolCategory = 'vision' | 'audio' | 'language' | 'creative' | 'business';

export interface AITool {
  id: string;
  name: string;
  description: string;
  category: AIToolCategory;
  icon: keyof typeof import('@expo/vector-icons/MaterialCommunityIcons').glyphMap;
  accessibilityHint: string;
}

export const AI_TOOLS: AITool[] = [
  // Vision AI (5 tools)
  {
    id: 'image-description',
    name: 'Image Description',
    description: 'Get detailed AI-powered descriptions of any image',
    category: 'vision',
    icon: 'image-search',
    accessibilityHint: 'Analyze and describe images in detail using AI vision',
  },
  {
    id: 'ocr',
    name: 'OCR Text Extract',
    description: 'Extract text from images and documents instantly',
    category: 'vision',
    icon: 'text-recognition',
    accessibilityHint: 'Extract and read text from images using optical character recognition',
  },
  {
    id: 'video-analysis',
    name: 'Video Analysis',
    description: 'Analyze video content and get scene descriptions',
    category: 'vision',
    icon: 'video-vintage',
    accessibilityHint: 'Analyze video content and get detailed descriptions of scenes',
  },
  {
    id: 'image-generation',
    name: 'Image Generator',
    description: 'Create stunning images from text descriptions',
    category: 'vision',
    icon: 'image-plus',
    accessibilityHint: 'Generate unique images from text prompts using AI',
  },
  {
    id: 'logo-designer',
    name: 'Logo Designer',
    description: 'Generate creative logo design ideas and concepts',
    category: 'vision',
    icon: 'hexagon-multiple',
    accessibilityHint: 'Create logo design concepts and ideas with AI assistance',
  },

  // Audio AI (5 tools)
  {
    id: 'audio-transcribe',
    name: 'Audio Transcription',
    description: 'Convert speech to text with high accuracy',
    category: 'audio',
    icon: 'microphone-message',
    accessibilityHint: 'Transcribe audio recordings to text automatically',
  },
  {
    id: 'voice-conversation',
    name: 'Voice Assistant',
    description: 'Have natural voice conversations with AI',
    category: 'audio',
    icon: 'account-voice',
    accessibilityHint: 'Talk to AI assistant using voice commands and responses',
  },
  {
    id: 'music-creator',
    name: 'Music Creator',
    description: 'Generate original music from text descriptions',
    category: 'audio',
    icon: 'music-box',
    accessibilityHint: 'Create custom music tracks from text descriptions',
  },
  {
    id: 'text-to-speech',
    name: 'Text to Speech',
    description: 'Convert any text to natural-sounding speech',
    category: 'audio',
    icon: 'account-voice',
    accessibilityHint: 'Convert written text to spoken audio with natural voice',
  },
  {
    id: 'voice-clone',
    name: 'Voice Cloning',
    description: 'Clone and synthesize realistic voice patterns',
    category: 'audio',
    icon: 'waveform',
    accessibilityHint: 'Create synthetic voices that match specific voice patterns',
  },

  // Language AI (5 tools)
  {
    id: 'translation',
    name: 'Smart Translation',
    description: 'Translate text between 100+ languages instantly',
    category: 'language',
    icon: 'translate',
    accessibilityHint: 'Translate text between multiple languages with AI accuracy',
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analysis',
    description: 'Analyze emotions and tone in text content',
    category: 'language',
    icon: 'emoticon-happy',
    accessibilityHint: 'Detect emotional tone and sentiment in written text',
  },
  {
    id: 'summarizer',
    name: 'Text Summarizer',
    description: 'Condense long documents into key points',
    category: 'language',
    icon: 'file-document-edit',
    accessibilityHint: 'Summarize long texts into concise key points',
  },
  {
    id: 'grammar',
    name: 'Grammar Checker',
    description: 'Fix grammar, spelling, and writing errors',
    category: 'language',
    icon: 'spell-check',
    accessibilityHint: 'Check and correct grammar and spelling errors in text',
  },
  {
    id: 'qa',
    name: 'Q&A Assistant',
    description: 'Get accurate answers to any question',
    category: 'language',
    icon: 'comment-question',
    accessibilityHint: 'Ask questions and get AI-powered answers on any topic',
  },

  // Creative AI (5 tools)
  {
    id: 'story-writer',
    name: 'Story Writer',
    description: 'Generate creative stories and narratives',
    category: 'creative',
    icon: 'book-open-variant',
    accessibilityHint: 'Create original stories and creative narratives with AI',
  },
  {
    id: 'poem-generator',
    name: 'Poem Generator',
    description: 'Create beautiful poems in various styles',
    category: 'creative',
    icon: 'feather',
    accessibilityHint: 'Generate poems in different styles and formats',
  },
  {
    id: 'video-script',
    name: 'Video Script Writer',
    description: 'Write engaging scripts for video content',
    category: 'creative',
    icon: 'script-text',
    accessibilityHint: 'Create professional video scripts and outlines',
  },
  {
    id: 'social-media',
    name: 'Social Media Post',
    description: 'Craft engaging posts for social platforms',
    category: 'creative',
    icon: 'share-variant',
    accessibilityHint: 'Generate engaging social media posts and captions',
  },
  {
    id: 'recipe-generator',
    name: 'Recipe Generator',
    description: 'Create recipes from available ingredients',
    category: 'creative',
    icon: 'chef-hat',
    accessibilityHint: 'Generate cooking recipes from ingredient lists',
  },

  // Business AI (5 tools)
  {
    id: 'code-explainer',
    name: 'Code Explainer',
    description: 'Understand code with detailed explanations',
    category: 'business',
    icon: 'code-braces',
    accessibilityHint: 'Get detailed explanations of programming code',
  },
  {
    id: 'math-solver',
    name: 'Math Solver',
    description: 'Solve complex mathematical problems step-by-step',
    category: 'business',
    icon: 'calculator',
    accessibilityHint: 'Solve mathematical problems with step-by-step solutions',
  },
  {
    id: 'email-writer',
    name: 'Email Writer',
    description: 'Draft professional emails automatically',
    category: 'business',
    icon: 'email-edit',
    accessibilityHint: 'Create professional email drafts for business communication',
  },
  {
    id: 'resume-builder',
    name: 'Resume Builder',
    description: 'Generate professional resume content',
    category: 'business',
    icon: 'file-account',
    accessibilityHint: 'Create professional resume content and descriptions',
  },
  {
    id: 'product-description',
    name: 'Product Description',
    description: 'Write compelling product descriptions',
    category: 'business',
    icon: 'tag-text',
    accessibilityHint: 'Generate persuasive product descriptions for marketing',
  },
];

export const CATEGORIES = [
  { id: 'vision', name: 'Vision AI', icon: 'eye' as const },
  { id: 'audio', name: 'Audio AI', icon: 'microphone' as const },
  { id: 'language', name: 'Language AI', icon: 'text' as const },
  { id: 'creative', name: 'Creative AI', icon: 'lightbulb' as const },
  { id: 'business', name: 'Business AI', icon: 'briefcase' as const },
];
