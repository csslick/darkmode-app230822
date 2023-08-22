import { useState } from 'react'
import './App.scss'
import { MdDarkMode } from 'react-icons/md'

function App() {

  return (
    <div className="App">
      <header>
        <h1>Dark mode App</h1>
        <button><MdDarkMode size={24} /></button>
      </header>
      <main>
        <h2>다크모드 앱에 대해</h2>
        <p>다크 모드 사용은 초창기와 비슷한 모습으로 회귀하였다고 할 수 있다. PC 초창기 시절의 MS-DOS(DOS)부터가 검은 바탕에 흰 글씨였다. 모바일 기기의 경우 2010년대 초에 안드로이드는 검정 화면 기반이 많았으며[2], iOS는 다크 모드는 아니지만 스큐어모피즘 차용으로 현재와 같이 쨍하게 밝은 이미지는 아니었다. 그러다가 안드로이드는 롤리팝부터, iOS는 7부터 미니멀리즘 디자인을 택하고 분위기가 전반적으로 밝아졌다. 그러던 것이 2010년 중반 기점으로 삼성전자, 구글, Apple, 마이크로소프트가 모두 다크 모드를 지원하기 시작하였다.
        </p>
      </main>
    </div>
  )
}

export default App
