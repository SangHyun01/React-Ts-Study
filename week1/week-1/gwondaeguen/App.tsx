import {
	useQuery,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

interface User {
	id: number;
	name: string;
}

const fetchUsers = async (): Promise<User[]> => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!res.ok) {
		throw new Error("fail");
	}
	return res.json();
};

function Root() {
	const {
		data: users,
		isLoading,
		isError,
		error,
		refetch,
	} = useQuery({
		queryKey: ["users"],
		queryFn: fetchUsers,
		enabled: false,
	});

	return (
		<div>
			<button type="button" onClick={() => refetch()}>
				데이터 가져오기
			</button>

			{isLoading && <div>로딩 중...</div>}
			{isError && (
				<div>
					에러 발생:{" "}
					{error instanceof Error ? error.message : "알 수 없는 에러"}
				</div>
			)}

			<ul>
				{users?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Root />
		</QueryClientProvider>
	);
}

export default App;
