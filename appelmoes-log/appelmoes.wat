(module
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (import "appelmoes" "print" (func $appelmoes/print (param i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 16392))
 (global $~lib/memory/__heap_base i32 (i32.const 16392))
 (memory $0 0)
 (table $0 1 funcref)
 (elem $0 (i32.const 1))
 (export "appelmoes" (func $appelmoes/appelmoes))
 (export "memory" (memory $0))
 (func $appelmoes/appelmoes (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  call $appelmoes/print
  local.get $1
  call $appelmoes/print
  local.get $0
  local.get $1
  i32.add
 )
)