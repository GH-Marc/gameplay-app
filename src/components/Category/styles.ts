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
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    paddingVertical: 7
  },

  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15
  },

  check: {
    width: 12,
    height: 12,
    alignSelf: "flex-end",
    backgroundColor: theme.colors.secondary100,
    marginRight: 7,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3
  },

  checked: {
    width: 10,
    height: 10,
    alignSelf: "flex-end",
    backgroundColor: theme.colors.primary,
    marginRight: 7,
    borderRadius: 3
  }
})
