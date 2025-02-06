import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import { MealsProvider } from '../../context/MealContext';

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/sign-in"} />;
  }

  return (
      <MealsProvider>
          <Stack>
              <Stack.Screen name="index" options={{ title: "Home" }} />
          </Stack>
      </MealsProvider>

  );
}
