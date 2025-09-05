import { NavLink } from "react-router-dom";




function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
        مرحبًا بكم في موقع لمياء
      </h1>
      <p className="mb-6 text-lg text-gray-700 max-w-xl">
        أنا لمياء، مدرسة لغة إنجليزية بخبرة أكثر من 30 عامًا. أقدم دروسًا ودورات
        لجميع الأعمار والمستويات. يسعدني مساعدتكم في تطوير مهاراتكم في اللغة
        الإنجليزية!
      </p>
      <a
        href="/contact"
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow transition"
        style={{ fontSize: "1.2rem" }}
      >
        احجز درس الآن
      </a>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <div className="bg-white rounded-xl shadow p-6 border text-right">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            كورسات تأسيسية للأطفال
          </h2>
          <p className="text-gray-600">
            أساسيات اللغة الإنجليزية للأطفال بطريقة ممتعة وتفاعلية.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border text-right">
          <h2 className="text-xl font-bold text-blue-800 mb-2">
            كورسات محادثة للكبار
          </h2>
          <p className="text-gray-600">
            تطوير مهارات التحدث والاستماع للكبار لجميع المستويات.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Home;

