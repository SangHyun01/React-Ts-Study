import styles from './MockMainPage.module.css';

function MockMainPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>지금 가장 핫한 상품!</h1>
          <p>모던한 디자인, 합리적인 가격</p>
          <button className={styles.ctaButton}>쇼핑하러 가기</button>
        </div>

        <section className={styles.products}>
          <h2>추천 상품</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <img src="https://placehold.co/400" alt="product" />
              <p className={styles.productName}>상품 이름</p>
              <p className={styles.productPrice}>₩29,000</p>
            </div>
            <div className={styles.productCard}>
              <img src="https://placehold.co/400" alt="product" />
              <p className={styles.productName}>상품 이름</p>
              <p className={styles.productPrice}>₩39,000</p>
            </div>
            <div className={styles.productCard}>
              <img src="https://placehold.co/400" alt="product" />
              <p className={styles.productName}>상품 이름</p>
              <p className={styles.productPrice}>₩49,000</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        © 2025 ShopMock. All rights reserved.
      </footer>
    </div>
  );
}

export default MockMainPage;
