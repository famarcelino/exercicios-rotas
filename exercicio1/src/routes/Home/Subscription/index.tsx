import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Subscription() {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="mb30 mt30">
                        <Card title="Página de inscrição" />
                    </div>
                    <div className="dflex">
                        <Link to="/">
                            <Button text="Ver promoção" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}