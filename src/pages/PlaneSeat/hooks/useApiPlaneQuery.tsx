import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDataSeats, updateDataSeat } from "../api";
import { TItem, TMutateSeat } from "../types";

const queryKeyPlaneSeat = "get-list-seat-plane";

export const useAPIGetSeatQuery = () => {
  const { isLoading, isFetching, refetch, data } = useQuery({
    queryKey: [queryKeyPlaneSeat],
    queryFn: getDataSeats,
  });

  return {
    isLoading,
    isFetching,
    loading: isLoading || isFetching,
    refetch,
    dataSeat: data || ([] as Array<TItem>),
  };
};

export const useAPIUpdateSeatQuery = ({ onSuccessCB }: TMutateSeat) => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: updateDataSeat,
    onSuccess: (d) => {
      if (d?.status) {
        if ([200, 204]?.includes(d?.status)) {
          if (onSuccessCB) {
            onSuccessCB();
          }
          queryClient.invalidateQueries({ queryKey: [queryKeyPlaneSeat] });
        } else {
          alert("Failed to update data");
        }
      } else {
        alert("Failed to update data");
      }
    },
    retry: 0,
  });

  return {
    mutate,
    isLoadingMutate: rest?.isPending,
  };
};
