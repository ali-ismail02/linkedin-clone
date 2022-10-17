import axios from 'axios';
let base_url = "http://127.0.0.1:3000/"
const Delete = async (api_url, api_data, api_token = null) => {
    try {
        return await axios.delete(
            base_url + api_url,
            api_data,
            {
                headers: {
                    'Authorization': api_token
                }
            }
        );
    } catch (error) {
        console.log("Error from POST API", error);
    }
};
export default Post