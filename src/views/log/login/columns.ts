import type { TableColumn } from '/@/components/Table'

export function createColumns(): TableColumn[] {
  return [
    {
      type: 'index',
    },
    {
      label: '操作账号',
      prop: 'account',
    },
    {
      align: 'center',
      label: 'IP',
      prop: 'ip',
    },
    {
      align: 'center',
      label: '请求状态',
      prop: 'status',
      formatter: (row: Recordable) => {
        return row.status === 0 ? '失败' : '成功'
      },
    },
    {
      align: 'center',
      label: '请求路径',
      prop: 'uri',
    },
    {
      align: 'center',
      label: '登录时间',
      prop: 'createTime',
    },
  ]
}
