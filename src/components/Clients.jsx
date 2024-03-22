import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-48 min-w-[120px] `}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-48 w-[100px] object-contain hover:brightness-[7] transition-all duration-300 ease-linear"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
