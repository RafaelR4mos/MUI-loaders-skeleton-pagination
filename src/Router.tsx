import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { BtnLoading } from "./pages/BtnLoading/index.tsx";
import { SimpleLoading } from "./pages/SimpleLoading/index.tsx";
import { Skeleton } from "./pages/Skeleton/index.tsx";
import { PaginationContent } from "./pages/Pagination/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/btn-loading" element={<BtnLoading />} />
      <Route path="/simple-loading" element={<SimpleLoading />} />
      <Route path="/skeleton-loading" element={<Skeleton />} />
      <Route path="/pagination" element={<PaginationContent />} />
    </Routes>
  );
}
