import React from "react";
import { Route, Routes } from "react-router-dom";
import NameNextPage from "./NameNextPage";

export default function NextPage() {

    return (
        <Routes>
            {/* /:name фиксированный элемент */}
            <Route path="/edit" element={<>Test text edit</>} />

            {/* /:name плавающий элемент */}
            <Route path="/:name" element={<NameNextPage />} />
        </Routes>
    )
}
