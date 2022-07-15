// links
import axios from "axios";
import { SlideProps } from "../types/mainSliderSlide";
import { partnersType } from "../types/partnersType";
import { sliderDataUrl, partners } from "../links";

export const getMainSliderData = (
  setState: React.Dispatch<SlideProps[]>
): void => {
  axios.get(sliderDataUrl).then((res) => {
    setState(res.data.data);
  });
};

export const getPartnerSliderData = (
  setState: React.Dispatch<partnersType[]>
): void => {
  axios.get(partners).then((res) => {
    setState(res.data.data);
  });
};
