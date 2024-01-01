import english from "./en.json";
import spanish from "./es.json";

enum Languages {
  ENGLISH = "en",
  SPANISH = "es",
}

export const getI18N = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === Languages.ENGLISH) return english;
  if (currentLocale === Languages.SPANISH) return spanish;
  return spanish;
};
