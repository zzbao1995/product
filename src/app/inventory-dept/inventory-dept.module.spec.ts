import { InventoryDeptModule } from './inventory-dept.module';

describe('InventoryDeptModule', () => {
  let inventoryDeptModule: InventoryDeptModule;

  beforeEach(() => {
    inventoryDeptModule = new InventoryDeptModule();
  });

  it('should create an instance', () => {
    expect(inventoryDeptModule).toBeTruthy();
  });
});
