import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="intro-y box p-5 mt-6">
      <div className="mt-1">
        <a
          href=""
          className="flex items-center px-3 py-2 rounded-md bg-primary text-white font-medium"
        >
          {" "}
          <i className="w-4 h-4 mr-2" data-lucide="file-plus" /> Tài liệu đầy
          đủ{" "}
        </a>
        {/* <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
          <i className="w-4 h-4 mr-2" data-lucide="folder-plus" /> Tài liệu đã
          tải lên
        </a> */}
        <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
          <i className="w-4 h-4 mr-2" data-lucide="file-text" /> Tài liệu tóm
          tắt
        </a>
        <Link to="/quiz" className="flex items-center px-3 py-2 mt-2 rounded-md">
          {" "}
          <i className="w-4 h-4 mr-2 " data-lucide="pen-tool" />
          Làm bài tập{" "}
        </Link>
        <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
          <i className="w-4 h-4 mr-2" data-lucide="bar-chart-2" /> Thống kê{" "}
        </a>
        <a href="" className="flex items-center px-3 py-2 mt-2 rounded-md">
          {" "}
          <i
            className="w-4 h-4 mr-2"
            data-lucide="search
                              "
          />
          Hỏi đáp{" "}
        </a>
      </div>
    </div>
  )
}