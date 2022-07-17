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
  post,
} from "../links";
import React from "react";

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

export const getEvent = (
  id: string | undefined,
  setState: eventType[1],
  setLoader: React.Dispatch<boolean>
): void => {
  axios
    .get(`${post}/${id}?locale=ru`)
    .then((res) => {
      setState(res.data.data);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    })
    .catch(() => {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    });
};
