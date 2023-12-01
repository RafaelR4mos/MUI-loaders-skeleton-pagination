import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { BtnLoading } from "./pages/BtnLoading/index.tsx";
import { SimpleLoading } from "./pages/SimpleLoading/index.tsx";
import { Skeleton } from "./pages/Skeleton/index.tsx";
import { LinearLoading } from "./pages/LinearLoading/index.tsx";
import { Pagination } from "./pages/Pagination/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/btn-loading" element={<BtnLoading />} />
      <Route path="/simple-loading" element={<SimpleLoading />} />
      <Route path="/linear-loading" element={<LinearLoading />} />
      <Route path="/skeleton" element={<Skeleton />} />
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
}
