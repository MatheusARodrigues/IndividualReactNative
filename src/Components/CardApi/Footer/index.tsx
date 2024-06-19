import { ActivityIndicator } from "react-native";

interface PropsLoad {
  recebendoLoading: boolean
}

export function LoadRepos({ recebendoLoading }: PropsLoad) {
  if (!recebendoLoading) return null;

  return (
    <ActivityIndicator size={35} color="#f00" />
  )
}