"use client";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white w-screen overflow-x-hidden">
      <Header />
      <section className="flex flex-col items-center mt-24 px-4">
        <div className="w-full max-w-7xl">
          <div className="flex justify-between items-center py-4 border-b">
            <h1 className="text-2xl font-bold text-blue-600">Community</h1>
            <div className="flex space-x-4">
              <button className="text-gray-600">Register</button>
              <button className="text-gray-600">Login</button>
            </div>
          </div>
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-4">
              <a href="#" className="text-sm font-semibold text-gray-900">Forum FAQ</a>
              <a href="#" className="text-sm font-semibold text-gray-900">About</a>
            </div>
            <div className="flex items-center space-x-2 border p-2 rounded">
              <input type="text" placeholder="Search" className="outline-none" />
              <button className="text-gray-600">🔍</button>
            </div>
          </div>
          <div className="bg-gray-200 p-2 rounded mb-4">
            <button className="text-gray-600">☰ Board index</button>
          </div>
          <div className="bg-white rounded shadow-sm overflow-hidden mb-4">
            <div className="bg-blue-500 text-white p-4 font-bold">Community</div>
            <div className="divide-y divide-gray-200">
              <div className="flex items-center p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">General discussion</h2>
                  <p className="text-sm text-gray-600">Topics related to general discussion</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Topics: 49390</p>
                  <p className="text-sm text-gray-600">Posts: 399373</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
                  <p className="text-sm text-gray-600">Notifications about changes</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Topics: 9</p>
                  <p className="text-sm text-gray-600">Posts: 13</p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="bg-white rounded shadow-sm overflow-hidden mb-4">
            <div className="bg-blue-500 text-white p-4 font-bold">Community</div>
            <div className="divide-y divide-gray-200">
              <div className="flex items-center p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">General discussion</h2>
                  <p className="text-sm text-gray-600">Topics related to general discussion</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Topics: 49390</p>
                  <p className="text-sm text-gray-600">Posts: 399373</p>
                </div>
              </div>
              <div className="flex items-center p-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
                  <p className="text-sm text-gray-600">Notifications about changes</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Topics: 9</p>
                  <p className="text-sm text-gray-600">Posts: 13</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </section>
    </main>
  );
}
