import axios from "axios";
import { SlideProps } from "../types/mainSliderSlide";
import { partnersType } from "../types/partnersType";
import { eventType } from "../types/eventProps";

// Links
import {
  sliderDataUrl,
  partners,
  postsMain,
  postsAll,
  postsAside,
} from "../links";

export const getMainSliderData = (
  setState: React.Dispatch<SlideProps[]>
): void => {
  axios
    .get(sliderDataUrl)
    .then((res) => {
      setState(res.data.data);
    })
    .catch(() => {});
};

export const getPartnerSliderData = (
  setState: React.Dispatch<partnersType[]>
): void => {
  axios
    .get(partners)
    .then((res) => {
      setState(res.data.data);
    })
    .catch(() => {});
};

export const getMainPosts = (setState: eventType[1]): void => {
  axios
    .get(postsMain)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};

export const getAllPosts = (setState: eventType[1]): void => {
  axios
    .get(postsAll)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};

export const getAsidePosts = (setState: eventType[1]): void => {
  axios
    .get(postsAside)
    .then((res) => {
      setState({ ...res.data, loaded: true });
    })
    .catch();
};
