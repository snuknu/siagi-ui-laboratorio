'use client'
import React, { useState } from 'react';
import useSWR from 'swr'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Panel } from 'primereact/panel';
import { ListBox } from 'primereact/listbox';

const fetcher = (url: string) => fetch(url).then((r) => r.json())

type Info = {
  version: number
  description: string
};

type Permissoao = {
  codigoSistema: number,
  codigoEmpresa: number,
  codigoLocal: number,
  etapasPermitidas: number[]
}

const SearchResults = () => {
  const { data, error } = useSWR(
    `http://localhost:8081/siagi-laboratorio/info`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  if (!data) return <div>not found</div>;

  let info: Info = data;

  return <>
    <Panel header="Info" style={{ margin: '10px' }}>
      <h1>{info.version}</h1>
      <h2>{info.description}</h2>
    </Panel>
  </>;

};


const SearchPermissoes = () => {

  const { data, error } = useSWR(
    `http://localhost:8081/siagi-security/security/buscarPermissoes`,
    (url: string) => fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjpbImVyaWMuY2FydmFsaG8iLCIyNjI3IiwiZXJpYy5jYXJ2YWxobyAgICAgICAiXSwiaXNzIjoiYXV0aDAiLCJleHAiOjE3NTQxNTYzMDN9.iG1oA4N4-beD3vs6OeKUzVHy1pP3KBDc7F2AdCbVfv0'
      },
      body: JSON.stringify([
        {
          "codigoSistema": 148,
          "codigoEmpresa": 1,
          "codigoLocal": 0
        }
      ])
    }).then((r) => r.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  if (!data) return <div>not found</div>;

  let permissao: Permissoao = data[0];
  console.log(permissao);
  return <>
    <Panel header="Permissoes" style={{ margin: '10px' }}>
      <ul>
        <li>Sistema: {permissao.codigoSistema}</li>
        <li>Empresa: {permissao.codigoEmpresa}</li>
        <li>Local: {permissao.codigoLocal}</li>
        <li>Etapas:
          <ul>
            {permissao.etapasPermitidas.map((obj,index) => <li key={index}>{obj}</li>)}
          </ul>
        </li>
      </ul>

    </Panel>
  </>;

};


export default function BasicDemo() {


  const [visible, setVisible] = useState(false);
  const [startFetching, setStartFetching] = useState(false);
  const [permissoesFetching, setPermissoesFetching] = useState(false);

  const items: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-refresh'
    },
    {
      label: 'Delete',
      icon: 'pi pi-times'
    }
  ];

  function show() {
    setVisible(!visible);
    return visible ? 'block' : 'none';
  }

  const handleClick = () => {
    setStartFetching(true);
  };

  const handlePermissoes = () => {
    setPermissoesFetching(true);
  };

  const startContent = (
    <React.Fragment>
      <Button icon="pi pi-plus" className="mr-2" onClick={show} />
      <Button icon="pi pi-print" className="mr-2" onClick={handleClick} />
      <Button icon="pi pi-upload" onClick={handlePermissoes} />
    </React.Fragment>
  );

  const centerContent = (
    <IconField iconPosition="left" style={{ display: !visible ? 'block' : 'none' }}>
      <InputIcon className="pi pi-search" />
      <InputText placeholder="Search" />
    </IconField>
  );

  const endContent = (
    <React.Fragment>
      <SplitButton label="Save" model={items} icon="pi pi-check"></SplitButton>
    </React.Fragment>
  );

  return (
    <div className="card">
      <Toolbar start={startContent} center={centerContent} end={endContent} />


      {startFetching && <SearchResults />}

      {permissoesFetching && <SearchPermissoes />}

    </div>
  );
}
