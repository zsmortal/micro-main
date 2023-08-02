// 开发环境地址（需要配置子应用设定的端口号）
// 线上环境地址（基座应用和子应用部署在同一个域名下，使用 location.origin 进行补全）
const getLocation = (name: string) => {
  const port: string = import.meta.env[`VITE_APP_${name}_PORT`] || ''
  const base: string = import.meta.env[`VITE_APP_${name}_BASE`] || ''
  if (port) return `http://localhost:${port}/`
  if (base) return `${window.location.origin}${base}`
}

// 子应用配置并导出（iframeApp：嵌入式应用、windowApp：新窗口应用）
const appList: ArrayType = [
  { name: 'XX1', nodeID: '#iframeApp' },
  { name: 'XX2', nodeID: '#iframeApp' }
]
export const microApp: ArrayType = appList.map((item: ObjectType) => ({
  name: import.meta.env[`VITE_APP_${item.name}_NAME`],
  entry: getLocation(item.name),
  container: item.nodeID,
  activeRule: '/' + import.meta.env[`VITE_APP_${item.name}_NAME`]
}))
