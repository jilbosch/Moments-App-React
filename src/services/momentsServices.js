import Axios from "axios";

const baseURL = "http://localhost:8080";

export const momentsServices= {
    getAllMoments() {
        const moments = Axios.get(baseURL + "/moments").then((res) => res.data);
        return moments;
      },
      deleteMoments(id){
        const moment = Axios.delete (baseURL + "/moments/"+id).then((res) =>res.data);
        return moment;
    },
    createMoments (dataMoments) {
        const moment = Axios.post (baseURL + "/moments", dataMoments).then((res) =>res.data);
        return moment;
    }, 
    updateMoments(id,dataMoments){
        const moment = Axios.put (baseURL + "/moments/"+id,dataMoments).then((res) =>res.data);
        return moment;
    },
    getMomentsById (id){
      const moment = Axios.get(baseURL + "/moments/"+ id).then((res) => res.data);
        return moment;
    },
    getBySearch(search){
        const searched = Axios.get(`${baseURL}/moments?search=${search}`).then((res)=> res.data);
        return searched;
    }
}