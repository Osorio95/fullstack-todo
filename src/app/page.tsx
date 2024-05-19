import { Main } from "@/components/dashboard/Main";
import { getTodoListService } from "@/services/todo/todoService";
import { QueryClient } from "@tanstack/react-query";

export default async function Home() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['tasks'],
		queryFn: getTodoListService,
	})

	return (
		<Main />
	);
}
