import { AXIOS_INSTANCE } from "@/configs/api";
import { message } from "antd";

export const request =
  ({
    method,
    url,
    data = null,
    params = null,
    cbSuccess = null,
    cbError = null,
    cbFinally = null,
    LOADING_ACTION,
    SUCCESS_ACTION,
    ERROR_ACTION,
    transformRequest,
  }) =>
  (dispatch) => {
    if (LOADING_ACTION)
      dispatch({
        type: LOADING_ACTION,
        payload: true,
      });
    return AXIOS_INSTANCE.request({
      method,
      url,
      data,
      params,
      transformRequest,
    })
      .then((res) => {
        setTimeout(() => {
          const { data: { status, data, message: resMessage } = {} } =
            res || {};
          if (status > 0) {
            if (SUCCESS_ACTION)
              dispatch({
                type: SUCCESS_ACTION,
                payload: { data, message: resMessage },
              });
            if (cbSuccess) cbSuccess(data);
          } else {
            const error = { status, data, message: resMessage };
            if (resMessage) {
              message.error(resMessage);
            }
            if (ERROR_ACTION)
              dispatch({
                type: ERROR_ACTION,
                payload: { error },
              });
            if (cbError) cbError(error);
          }
        }, 100);
      })
      .catch((err) => {
        message.error("Có lỗi xảy ra!!!");
        if (ERROR_ACTION)
          dispatch({
            type: ERROR_ACTION,
            payload: { error: err?.response?.data },
          });
        if (cbError) cbError(err?.response?.data);
      })
      .finally(() => {
        if (cbFinally) cbFinally();
      });
  };
