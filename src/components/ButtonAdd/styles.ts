import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.colors.primary,
    borderRadius: 8
  }
})
