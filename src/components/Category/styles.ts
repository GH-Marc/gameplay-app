import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 8
  },

  content: {
    width: 100,
    height: 116,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingVertical: 20
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15
  },

  check: {
    position: "absolute",
    width: 12,
    height: 12,
    top: 7,
    right: 7,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3
  },

  checked: {
    position: "absolute",
    width: 10,
    height: 10,
    top: 7,
    right: 7,
    backgroundColor: theme.colors.primary,
    borderRadius: 3
  }
})
