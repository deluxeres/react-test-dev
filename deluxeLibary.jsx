//Вывод обьектов с JSON формата React(дополнительный импортов не нужно)
{products.map((product) => {
    return (
        //content
    );
  })}




//Вывод обьектов по API запросу
  const [post, setPost] = useState([]);

  React.useEffect(() => {
    fetch("https://62b9d604ff109cd1dc9c3cc3.mockapi.io/table")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPost(json);
      });
  }, []);
// + к этому проходимся по масиму с помощью метода map 
{post.map((obj) => {
    return (
   );
})}
//Вывод обьектов по API запросу

