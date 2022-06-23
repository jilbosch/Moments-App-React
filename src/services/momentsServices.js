import axios from "axios";

const baseURL = "https://6286353296bccbf32d713ccb.mockapi.io";

export const momentsServices= {
    getAllMoments() {
        const moments = axios.get(baseURL + "/moments").then((res) => res.data);
        return moments;
      },
}