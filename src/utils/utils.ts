import { PressableStateCallbackType } from 'react-native';
export function isTextChildren(
  children:
    | React.ReactNode
    | ((state: PressableStateCallbackType) => React.ReactNode)
) {
  return Array.isArray(children)
    ? children.every((child) => typeof child === 'string')
    : typeof children === 'string';
}
