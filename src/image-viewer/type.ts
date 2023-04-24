/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TNode } from '../common';

export interface TdImageViewerProps {
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；也可以完全自定义关闭按钮
   * @default true
   */
  closeBtn?: boolean | TNode;
  /**
   * 是否显示删除操作
   * @default false
   */
  deleteBtn?: boolean;
  /**
   * 图片数组
   * @default []
   */
  images?: Array<string>;
  /**
   * 初始化页码
   * @default 0
   */
  initialIndex?: Number;
  /**
   * 最大放大比例
   * @default 3
   */
  maxZoom?: Number;
  /**
   * 是否显示页码
   * @default false
   */
  showIndex?: boolean;
  /**
   * 隐藏/显示预览
   * @default false
   */
  visible?: boolean;
  /**
   * 隐藏/显示预览，非受控属性
   * @default false
   */
  defaultVisible?: boolean;
  /**
   * 隐藏/显示预览
   * @default false
   */
  modelValue?: boolean;
  /**
   * 翻页时回调
   */
  onChange?: (index: Number) => void;
  /**
   * 关闭时触发，事件参数包含触发关闭的来源：关闭按钮、遮罩层、ESC 键
   */
  onClose?: (context: { trigger: 'close-btn' | 'overlay' | 'esc'; e: MouseEvent | KeyboardEvent }) => void;
  /**
   * 点击删除操作按钮时触发
   */
  onDelete?: (index: Number) => void;
}
