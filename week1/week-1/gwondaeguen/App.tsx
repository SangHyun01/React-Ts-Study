function App() {
	const getData = async () => {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
		} catch (error) {
			console.error("에러 발생:", error);
		}
	};

	return (
		<div>
			<button type="button" onClick={getData}>
				데이터 가져오기
			</button>
		</div>
	);
}
