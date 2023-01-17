import { useWindowSize } from "./useWindowSize";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): boolean => {
  const { width } = useWindowSize();

  return width <= 960;
};
