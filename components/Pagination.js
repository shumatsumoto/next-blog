import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Pagination.module.scss";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;
  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const router = useRouter();
  console.log(router.query.id);

  return (
    <ul className={styles.linkList}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => {
        return router.query.id === number.toString() ? (
          <li key={index}>
            <Link href={`/blog/page/${number}`}>
              <a className={styles.active}>{number}</a>
            </Link>
          </li>
        ) : (
          <li key={index}>
            <Link href={`/blog/page/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
