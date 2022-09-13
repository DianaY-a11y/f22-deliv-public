import axios from "axios";
export default {
  getAllOpportunity: function () {
    return axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=e1bde257&app_key=75a42320dea35a4873f991efdf15dd1f&search=`
    );
  },
};
