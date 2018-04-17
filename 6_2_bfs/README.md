1. 너비 우선 탐색이란
    1. 그래프에서 최단 경로를 찾는 알고리즘
    2. 너비 우선 탐색은 아래 두 질문에 대답할 수 있다.
    3. 정점 A에서 정점 B로 가는 경로가 존재하는가?
    4. 정점 A에서 정점 B로 가는 최단 경로는 무엇인가?
    5. 이웃부터 확인하기 위해서 Queue를 사용한다. (FIFO)

2. 알고리즘
    1. 시작하는 정점의 이웃을 모두 Queue에 담는다.
    2. Queue에서 꺼내면서 해당 정점이 찾는 목적지인지 확인한다.
    3. 찾는 목적지가 아닌 경우 해당 정점의 이웃을 모두 Queue에 담는다.
    4. Queue가 비게 되면 그래프에서 목적지가 없는 것이다.
    5. :fire: 이미 확인한 정점 여부를 저장해야 한다. (서로 이웃일 시 무한 루프 방지)

3. 어떻게 응용할 수 있는가?
    1. 맞춤법 검사
    2. 체스 게임을 최단 수 내에 승리하는 방법