import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { baseURL } from "../../App";
import styles from "./Quote.module.css";

const Quote = () => {
  const [quote, setQuote] = useState({});

  const getQuote = useCallback(() => {
    axios
      .get(`${baseURL}/quotes`)
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getQuote();
  }, [getQuote]);

  return (
    <figure className={styles.container}>
      <blockquote className={styles.quote}>
        "{quote.content}"
      </blockquote>
      <figcaption className={styles.source}>
        &mdash; {quote.source}
      </figcaption>
    </figure>
  );
};

export default Quote;