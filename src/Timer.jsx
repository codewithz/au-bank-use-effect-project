function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setTime(1), 1000);

    return () => {
      // setInterval cleared when component unmounts
      clearInterval(interval);
    };
  }, []);
}
