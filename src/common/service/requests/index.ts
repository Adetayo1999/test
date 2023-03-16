import { ACTION_TYPES } from "@common/context/action-types";
import { DispatchType } from "../../../types/index";
import { errorFormatter } from "src/utils/error-formatter";
import { getAllAssets, getAllBanks } from "../api";
// import { customToast } from "src/utils/custom-toast";

const service = {
  async getBanks(dispatch: DispatchType) {
    dispatch({ type: ACTION_TYPES.FETCH_BANKS });
    try {
      const { data } = await getAllBanks();
      dispatch({
        type: ACTION_TYPES.FETCH_BANKS_SUCCESS,
        payload: data?.data || [],
      });
    } catch (error) {
      const message = errorFormatter(error);
      dispatch({ type: ACTION_TYPES.FETCH_BANKS_FAILURE });
      // customToast(message, "error");
    }
  },
  async getFiats(dispatch: DispatchType) {
    dispatch({ type: ACTION_TYPES.FETCH_FIATS });
    try {
      const { data } = await getAllAssets();
      dispatch({
        type: ACTION_TYPES.FETCH_FIATS_SUCCESS,
        payload: data?.data || [],
      });
    } catch (error) {
      const message = errorFormatter(error);
      dispatch({ type: ACTION_TYPES.FETCH_FIATS_FAILURE });
      // customToast(message, "error");
    }
  },
};

export default service;
