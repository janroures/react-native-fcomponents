# React Native FComponents - Style Props Documentation

## Overview

React Native FComponents is a utility library that provides simplified style props for React Native components. The core of this library is the `BoxStyleProps` interface and `parseStylePropsToViewProps` function that transform abbreviated props into standard React Native styles.

## Core Concept

The library uses abbreviated style props to make styling more concise and readable. These props are automatically converted to standard React Native style properties, with responsive scaling applied to size values.

## BoxStyleProps Interface

### Layout & Sizing

| Prop   | Type               | React Native Equivalent | Description                     |
| ------ | ------------------ | ----------------------- | ------------------------------- |
| `flex` | `number`           | `flex`                  | Flex grow factor                |
| `fw`   | `string`           | `flexWrap`              | Flex wrap behavior              |
| `w`    | `number \| string` | `width`                 | Component width                 |
| `h`    | `number \| string` | `height`                | Component height                |
| `gap`  | `number`           | `gap`                   | Gap between flex items (scaled) |
| `row`  | `boolean`          | `flexDirection: 'row'`  | Sets flex direction to row      |
| `wrap` | `boolean`          | `flexWrap: 'wrap'`      | Enables flex wrap               |

### Spacing (Margin & Padding)

All spacing props are automatically scaled using `scaleSize()`.

| Prop | Type     | React Native Equivalent | Description        |
| ---- | -------- | ----------------------- | ------------------ |
| `m`  | `number` | `margin`                | All margins        |
| `mh` | `number` | `marginHorizontal`      | Horizontal margins |
| `mv` | `number` | `marginVertical`        | Vertical margins   |
| `mt` | `number` | `marginTop`             | Top margin         |
| `mb` | `number` | `marginBottom`          | Bottom margin      |
| `ml` | `number` | `marginLeft`            | Left margin        |
| `mr` | `number` | `marginRight`           | Right margin       |
| `p`  | `number` | `padding`               | All padding        |
| `ph` | `number` | `paddingHorizontal`     | Horizontal padding |
| `pv` | `number` | `paddingVertical`       | Vertical padding   |
| `pt` | `number` | `paddingTop`            | Top padding        |
| `pb` | `number` | `paddingBottom`         | Bottom padding     |
| `pl` | `number` | `paddingLeft`           | Left padding       |
| `pr` | `number` | `paddingRight`          | Right padding      |

### Border & Border Radius

| Prop   | Type     | React Native Equivalent   | Description                  |
| ------ | -------- | ------------------------- | ---------------------------- |
| `br`   | `number` | `borderRadius`            | All corner radius (scaled)   |
| `btrr` | `number` | `borderTopRightRadius`    | Top-right radius (scaled)    |
| `btlr` | `number` | `borderTopLeftRadius`     | Top-left radius (scaled)     |
| `bblr` | `number` | `borderBottomLeftRadius`  | Bottom-left radius (scaled)  |
| `bbrr` | `number` | `borderBottomRightRadius` | Bottom-right radius (scaled) |
| `brw`  | `number` | `borderWidth`             | Border width (scaled)        |
| `brc`  | `string` | `borderColor`             | Border color                 |
| `brtw` | `number` | `borderTopWidth`          | Top border width (scaled)    |
| `brtc` | `string` | `borderTopColor`          | Top border color             |
| `brrw` | `number` | `borderRightWidth`        | Right border width (scaled)  |
| `brrc` | `string` | `borderRightColor`        | Right border color           |
| `brbw` | `number` | `borderBottomWidth`       | Bottom border width (scaled) |
| `brbc` | `string` | `borderBottomColor`       | Bottom border color          |
| `brlw` | `number` | `borderLeftWidth`         | Left border width (scaled)   |
| `brlc` | `string` | `borderLeftColor`         | Left border color            |

### Colors & Background

| Prop | Type     | React Native Equivalent | Description      |
| ---- | -------- | ----------------------- | ---------------- |
| `bc` | `string` | `backgroundColor`       | Background color |

### Position & Layout

| Prop     | Type                             | React Native Equivalent | Description                        |
| -------- | -------------------------------- | ----------------------- | ---------------------------------- |
| `pos`    | `'absolute' \| 'relative'`       | `position`              | Position type                      |
| `top`    | `number \| string`               | `top`                   | Top position (scaled if number)    |
| `left`   | `number \| string`               | `left`                  | Left position (scaled if number)   |
| `right`  | `number \| string`               | `right`                 | Right position (scaled if number)  |
| `bottom` | `number \| string`               | `bottom`                | Bottom position (scaled if number) |
| `of`     | `'hidden' \| 'scroll' \| 'auto'` | `overflow`              | Overflow behavior                  |

### Flex Alignment

| Prop | Type                                                                | React Native Equivalent | Description                                               |
| ---- | ------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------- |
| `ai` | `'center' \| 'start' \| 'end'`                                      | `alignItems`            | Align items (`start`/`end` → `flex-start`/`flex-end`)     |
| `jc` | `'center' \| 'start' \| 'end' \| 'space-between' \| 'space-around'` | `justifyContent`        | Justify content (`start`/`end` → `flex-start`/`flex-end`) |
| `as` | `'center' \| 'start' \| 'end'`                                      | `alignSelf`             | Align self (`start`/`end` → `flex-start`/`flex-end`)      |

### Effects & Appearance

| Prop           | Type      | React Native Equivalent | Description            |
| -------------- | --------- | ----------------------- | ---------------------- |
| `o`            | `number`  | `opacity`               | Opacity value          |
| `shadow`       | `boolean` | Shadow style            | Enables default shadow |
| `lightShadow`  | `boolean` | Shadow style            | Enables light shadow   |
| `mediumShadow` | `boolean` | Shadow style            | Enables medium shadow  |
| `strongShadow` | `boolean` | Shadow style            | Enables strong shadow  |

### Standard Props

| Prop       | Type                   | React Native Equivalent | Description              |
| ---------- | ---------------------- | ----------------------- | ------------------------ |
| `children` | `React.ReactNode`      | -                       | Child components         |
| `style`    | `StyleProp<ViewStyle>` | -                       | Additional custom styles |

## parseStylePropsToViewProps Function

The `parseStylePropsToViewProps(props: BoxStyleProps)` function transforms abbreviated props into React Native compatible style objects.

### Key Transformations

1. **Responsive Scaling**: Numeric spacing and size values are passed through `scaleSize()` for responsive design
2. **Flex Alignment Mapping**: `start`/`end` values are mapped to `flex-start`/`flex-end`
3. **Shadow Composition**: Shadow props return an array `[shadowStyle, viewProps]` for proper style merging
4. **Position Handling**: Numeric position values are scaled, string values are passed through unchanged

### Shadow System

The library provides 4 shadow presets:

- **shadow**: Standard shadow (`SHADOW_FRAME`)
- **lightShadow**: Light shadow (`SHADOW_FRAME_LIGHT`)
- **mediumShadow**: Medium shadow (`SHADOW_FRAME_MEDIUM`)
- **strongShadow**: Strong shadow (`SHADOW_FRAME_STRONG`)

Each shadow preset is platform-specific (iOS uses shadow properties, Android uses elevation).

## Usage Examples

### Basic Usage

```tsx
import { FBox } from 'react-native-fcomponents';

<FBox p={16} br={8} bc="#fff">
  <Text>Hello World</Text>
</FBox>;
```

### Layout Examples

```tsx
// Row layout with spacing
<FBox row gap={12} p={16}>
  <FBox w={50} h={50} br={25} bc="blue" />
  <FBox flex={1}>
    <Text>Content</Text>
  </FBox>
</FBox>

// Absolute positioning
<FBox pos="relative" w={200} h={200}>
  <FBox pos="absolute" top={10} left={10} w={20} h={20} bc="red" />
</FBox>

// Flexbox alignment
<FBox jc="center" ai="center" w="100%" h={200}>
  <Text>Centered Content</Text>
</FBox>
```

### Border Examples

```tsx
// Complex border styling
<FBox br={12} brw={2} brc="#ddd" brtw={4} brtc="#ff0000" p={16}>
  <Text>Custom Border</Text>
</FBox>
```

### Shadow Examples

```tsx
// Different shadow intensities
<FBox p={16} br={8} shadow>
  <Text>Default Shadow</Text>
</FBox>

<FBox p={16} br={8} mediumShadow>
  <Text>Medium Shadow</Text>
</FBox>

<FBox p={16} br={8} strongShadow>
  <Text>Strong Shadow</Text>
</FBox>
```

## Implementation Guide for LLMs & Coding Agents

### When implementing this library:

1. **Always import** `BoxStyleProps` and `parseStylePropsToViewProps` from `styles/interfaces`
2. **Apply scaling** to numeric size/spacing values using `scaleSize()`
3. **Map flex alignment** values: `start` → `flex-start`, `end` → `flex-end`
4. **Handle shadow props** by returning array styles `[shadowStyle, viewProps]`
5. **Position values** should be scaled if numeric, passed through if string
6. **Combine with custom styles** using array syntax: `[parsedProps, customStyle]`

### Component Pattern

```tsx
import React from 'react';
import { View, ViewProps } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from '../styles/interfaces';

type Props = BoxStyleProps & ViewProps;

const YourComponent = (props: Props) => {
  return (
    <View style={[parseStylePropsToViewProps(props), props.style]}>
      {props.children}
    </View>
  );
};
```

## Scaling System

The library uses a responsive scaling system based on screen width:

- **Base width**: 375px (iPhone standard)
- **Scaling factor**: `(screenWidth / 375) * size`
- **Applied to**: All numeric spacing, sizing, and position values

This ensures consistent proportions across different device sizes.

## Integration with Existing Components

The style props system is designed to work seamlessly with existing React Native components:

```tsx
import { Text } from 'react-native';
import {
  BoxStyleProps,
  parseStylePropsToViewProps,
} from 'react-native-fcomponents';

type StyledTextProps = BoxStyleProps & Text['props'];

const StyledText = (props: StyledTextProps) => {
  const { style, ...textProps } = props;
  const styleProps = parseStylePropsToViewProps(props);

  return (
    <Text {...textProps} style={[styleProps, style]}>
      {props.children}
    </Text>
  );
};
```

## Best Practices

1. **Use abbreviated props** for consistency and readability
2. **Combine with standard styles** when needed: `style={[parsedProps, customStyle]}`
3. **Leverage the shadow system** instead of manual shadow properties
4. **Use responsive values** - the scaling handles cross-device compatibility
5. **Prefer semantic prop names** like `ai="center"` over `alignItems="center"`

## Available Components

The library exports these base components that already support all style props:

- `FBox` - Basic container component
- `FText` - Text component
- `FButton` - Button component
- `FImage` - Image component
- `FCircle` - Circular component
- `FIcon` - Icon component
- `FList` - List component
- `FTextInput` - Text input component
- `FContainer` - Container component

All of these components accept the full `BoxStyleProps` interface.
