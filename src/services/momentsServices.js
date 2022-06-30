import Axios from "axios";

const baseURL = "https://6286353296bccbf32d713ccb.mockapi.io";

export const momentsServices= {
    getAllMoments() {
        const moments = Axios.get(baseURL + "/moments").then((res) => res.data);
        return moments;
      },
      deleteMovie(id){
        const moments = Axios.delete (baseURL + "/moments/"+id).then((res) =>res.data);
        return moments;
    },
    createMovie (dataMovie) {
        const moments = Axios.post (baseURL + "/moments/",dataMovie ).then((res) =>res.data);
        return moments;
    }, 
    updateMovie(id,dataMovie){
        const moments = Axios.put (baseURL + "/moments/"+id,dataMovie).then((res) =>res.data);
        return moments;
    }
    
}