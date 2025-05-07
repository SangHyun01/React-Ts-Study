import {
	useQuery,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

interface User {
	id: number;
	name: string;
	age: number;
}

const fetchUser = async (): Promise<User[]> => {
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
		queryFn: fetchUser,
		enabled: false,
	});
	const [userName, setUserName] = useState("");

	const filterUsers = users?.filter((user) => user.name.includes(userName));

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					setUserName(e.target.value);
				}}
			/>
			<button type="submit" onClick={() => refetch()}>
				검색
			</button>
			{isLoading && <div>로딩 중...</div>}
			{isError && (
				<div>
					에러 발생:{" "}
					{error instanceof Error ? error.message : "알 수 없는 에러"}
				</div>
			)}
			<ul>
				{filterUsers?.map((user) => {
					return <li key={user.id}>{user.name}</li>;
				})}
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
