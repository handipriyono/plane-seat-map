import axios from "../../../commons/helpers/axios";
import Config from "../../../commons/constants/config";

type TBody = {
  id: string;
  occupied: boolean;
};

const getDataSeats = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "rest/v1/seats",
      headers: {
        apiKey: Config.APIKeySupabase,
      },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

const updateDataSeat = async (data: TBody) => {
  try {
    const response = await axios({
      method: "put",
      headers: {
        apiKey: Config.APIKeySupabase,
      },
      url: `rest/v1/seats?id=eq.${data?.id}`,
      data,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getDataSeats, updateDataSeat };
