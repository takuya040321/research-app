"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

interface ShopResearchHeaderProps {
  selectedCategory: string | null;
  selectedPlatform: string | null;
  selectedBrand: string | null;
}

export function ShopResearchHeader({
  selectedCategory,
  selectedPlatform,
  selectedBrand
}: ShopResearchHeaderProps) {
  return (
    <div className="border-b border-border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop-research">
              ショップリサーチ
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {selectedCategory && (
            <>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {selectedCategory}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          
          {selectedPlatform && (
            <>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {selectedPlatform}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          
          {selectedBrand && (
            <>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  {selectedBrand}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}