import React from 'react';
import FormTaskComponent from "../components/FromTaskComponent";
import ListTaskComponent from "../components/ListTaskComponent";

const HomeScreen = () => {


    return (
        <main id="main-container">
            <section id="wrap-todo">
                <div className="container">
                    <h1>My Todos</h1>
                    <FormTaskComponent />
                    <ListTaskComponent />
                </div>
            </section>
        </main>
    )
}

export default HomeScreen;