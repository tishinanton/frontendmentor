import { useMediaQuery } from "@react-hook/media-query";

export const useIsMobile = () => {
  return useMediaQuery("only screen and (max-width: 768px)");
};
