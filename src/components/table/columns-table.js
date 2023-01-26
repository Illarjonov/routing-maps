const Span = ({ text, isselected }) => <span style={{ color: isselected && "rgb(251 144 0)" }}> {text} </span>

export const columns = (selectedCoordinates) => {
  //проверка выбрано или нет
  const isselected = (fullInfo) => selectedCoordinates.name === fullInfo.name

  return [
    {
      title: 'Номер заявки',
      dataIndex: 'name',
      key: 'name',
      render: (name) => <Span text={name} name={name} />
    },
    {
      title: 'От lat',
      dataIndex: 'fromlat',
      key: 'fromlat',
      render: (fromlat, fullInfo) => <Span text={fromlat} isselected={isselected(fullInfo)} />
    },
    {
      title: 'От ing',
      dataIndex: 'froming',
      key: 'froming',
      render: (froming, fullInfo) => <Span text={froming} isselected={isselected(fullInfo)} />
    },
    {
      title: 'До lat',
      dataIndex: 'tolat',
      key: 'tolat',
      render: (tolat, fullInfo) => <Span text={tolat} isselected={isselected(fullInfo)} />
    },
    {
      title: 'До ing',
      dataIndex: 'toing',
      key: 'toing',
      render: (toing, fullInfo) => <Span text={toing} isselected={isselected(fullInfo)} />
    },
  ]
}