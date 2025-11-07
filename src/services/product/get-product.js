import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProduct = (accessToken, productType) => {
    return useQuery({
        queryKey: ["get-product", accessToken, productType],
        queryFn: async () => {
            const response = await axios.get("/api/product", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                params: {
                    productType,
                },
            });
            return response.data;
        },
        enabled: !!accessToken,
        refetchOnWindowFocus: false,
        retry: false,
    });
};
