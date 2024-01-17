import { axiosInstance } from "@/lib/axios";
import { Auth } from "@/models/Auth";
import { Base } from "@/models/Base";

export async function login(userName:string,password:string): Promise<Auth> {
    const res = await axiosInstance.post<Base<Auth>>("/Auth/Login", {
      username: userName,
      password: password,
    });
    if (res.data.state === "Success") {
      return res.data.data;
    } else {
      throw res.data.message;
    }
  }