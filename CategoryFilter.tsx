import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@/constants/theme';
import { AIToolCategory, CATEGORIES } from '@/constants/aiTools';

interface CategoryFilterProps {
  selectedCategory: AIToolCategory | 'all';
  onSelectCategory: (category: AIToolCategory | 'all') => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const theme = useTheme();

  const allCategories = [
    { id: 'all', name: 'All Tools', icon: 'apps' as const },
    ...CATEGORIES,
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      accessibilityRole="tablist"
      accessibilityLabel="Category filter tabs"
    >
      {allCategories.map((category) => {
        const isSelected = selectedCategory === category.id;
        return (
          <Pressable
            key={category.id}
            onPress={() => onSelectCategory(category.id as AIToolCategory | 'all')}
            accessibilityRole="tab"
            accessibilityLabel={category.name}
            accessibilityState={{ selected: isSelected }}
            accessibilityHint={`Filter to show ${category.name}`}
            style={({ pressed }) => [
              styles.chip,
              {
                backgroundColor: isSelected ? theme.colors.primary : theme.colors.surface,
                borderColor: isSelected ? theme.colors.primary : theme.colors.border,
                opacity: pressed ? 0.7 : 1,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={category.icon}
              size={18}
              color={isSelected ? '#FFFFFF' : theme.colors.textSecondary}
              style={styles.icon}
              accessibilityElementsHidden
            />
            <Text
              style={[
                styles.chipText,
                { color: isSelected ? '#FFFFFF' : theme.colors.text },
              ]}
            >
              {category.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    minHeight: 44,
  },
  icon: {
    marginRight: 6,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
